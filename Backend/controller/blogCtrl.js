const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const fs=require('fs');
const cloundinaryUploadImg=require('../untils/cloundinary');
const asyncHandler = require("express-async-handler");
const validateMongodbId = require("../untils/validateMongodbId");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            status: "success",
            newBlog,
        });
    } catch (error) {
        throw new Error(error);

    }
});
const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateBlog);
    } catch (error) {
        throw new Error(error);

    }
});
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog);
    } catch (error) {
        throw new Error(error);

    }
});
const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getBlog = await Blog.findById(id).populate("likes");
        const updateViews = await Blog.findByIdAndUpdate(
            id, {
            $inc: { numViews: 1 },
        },
            { new: true }
        );
        res.json(getBlog);
    } catch (error) {
        throw new Error(error);

    }
});
const getAllBlog = asyncHandler(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs);

    } catch (error) {
        throw new Error(error);
    }
});
const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
    //find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;
    //find if the user has  liked the blog
    const isLiked = blog?.isLiked;
    //find if the  user has disliked the blog
    const alreadyDisliked = blog?.dislike?.find(
        (userId =>  userId?.toString() === loginUserId?.toString())

    );
    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            }, { new: true });
        res.json(blog);
    }
    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $pull: { likes: loginUserId },
                isLiked: false,
            }, { new: true });

        res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $push: { likes: loginUserId },
                isLiked: true,
            }, { new: true });

        res.json(blog);

    }
}
)
const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
    //find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    //find the login user
    const loginUserId = req?.user?._id;
    //find if the user has  liked the blog
    const isDisLiked = blog?.isDisLiked;
    //find if the  user has disliked the blog
    const alreadyLiked = blog?.like?.find(
        (userId =>  userId?.toString() === loginUserId?.toString())

    );
    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            }, { new: true });
        res.json(blog);
    }
    if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $pull: { dislikes: loginUserId },
                isDisliked: false,
            }, { new: true });

        res.json(blog);
    }
    else{
        const blog = await Blog.findByIdAndUpdate(blogId,
            {
                $push: { likes: loginUserId },
                isLiked: true,
            }, { new: true });

        res.json(blog);

    }
}
)
const uploadImages=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try{
        const uploader=(path)=> cloundinaryUploadImg(path,"images");
        const urls=[];
        const files=req.files;
        for(const file of file){
            const {path}=file;
            const newpath=await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const findBlog=await Blog.findByIdAndUpdate(id, {
            images:urls.map((file)=>{
                return file;
            })
        },{
            new:true,
        }  );
        res.json(findBlog)
    }catch(error){
            throw new Error(error)
    }
})
module.exports = { createBlog,likeBlog,dislikeBlog, deleteBlog, getAllBlog, updateBlog, getBlog ,uploadImages};