import express from "express";
import { aboutRouter } from "../modules/about/about.route";
import { advertiseRouter } from "../modules/advertise/advertise.route";
import { bannerRouter } from "../modules/banner/banner.route";
import { blogRouter } from "../modules/blog/blog.route";
import { eventRoute } from "../modules/event/event.route";
import { galleryRoute } from "../modules/gallery/gallery.route";
import { memberRoute } from "../modules/members/member.route";
import { likeRoute } from "../modules/likes/likes.route";
import { commentRouter } from "../modules/comments/comments.route";
import { jwtRouter } from "../../shared/varifyJwt.route";
import { paymentRoute } from "../modules/payment/payment.route";
import { workRouter } from "../modules/works/works.router";
const router = express.Router();

const moduleRouter = [
  {
    path: "/about",
    route: aboutRouter,
  },
  {
    path: "/advertise",
    route: advertiseRouter,
  },
  {
    path: "/banner",
    route: bannerRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/event",
    route: eventRoute,
  },
  {
    path: "/gallery",
    route: galleryRoute,
  },
  {
    path: "/member",
    route: memberRoute,
  },
  {
    path: "/like",
    route: likeRoute,
  },
  {
    path: "/comment",
    route: commentRouter,
  },
  {
    path: "/jwt",
    route: jwtRouter,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
  {
    path: "/work",
    route: workRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
