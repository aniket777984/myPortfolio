const express = require("express");
const { addProject, addTimeline, addYoutube, contact, deleteProject, deleteTimeline, deleteYoutube, getUser, login, logout, myProfile, updateUser } = require("../controller/User.js");
const { isAutheticated }  = require("../middlewares/auth.js");
const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route('/logout').get(logout);
userRouter.route('/user').get(getUser);
userRouter.route('/me').get(isAutheticated,myProfile);
userRouter.route('/admin/update').put(isAutheticated,updateUser);
userRouter.route('/admin/timeline/add').post(isAutheticated,addTimeline);
userRouter.route("/admin/youtube/add").post(isAutheticated, addYoutube);
userRouter.route("/admin/project/add").post(isAutheticated,addProject);

userRouter.route("/admin/timeline/:id").delete(isAutheticated,deleteTimeline);
userRouter.route("/admin/youtube/:id").delete(isAutheticated,deleteYoutube);
userRouter.route("/admin/project/:id").delete(isAutheticated,deleteProject);

userRouter.route('/contact').post(contact);

module.exports = userRouter;