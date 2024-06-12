import { Router } from "express";
import { youtubeLinkCreate, youtubeLinkGet, youtubeLinkDeleteById, youtubeLinkTestimonialsCreate, youtubeLinkTestimonialsDeleteById, youtubeLinkTestimonialsGet, youtubeLinkGetAllVideos, youtubeLinkTestimonialsGetAllVideos } from "../../controllers/admin/youtube.controllers.js";


const youtubeLinkRoute = Router();


// Videos For the Home page
youtubeLinkRoute.route("/video").post(youtubeLinkCreate);
youtubeLinkRoute.route("/video").get(youtubeLinkGet);
youtubeLinkRoute.route("/get/videos").get(youtubeLinkGetAllVideos);
youtubeLinkRoute.route("/video/:id").delete(youtubeLinkDeleteById);



//Testimonials For the Home Pages In the form of video
youtubeLinkRoute.route("/testimonials").post(youtubeLinkTestimonialsCreate);
youtubeLinkRoute.route("/testimonials").get(youtubeLinkTestimonialsGet);
youtubeLinkRoute.route("/get/testimonials").get(youtubeLinkTestimonialsGetAllVideos);
youtubeLinkRoute.route("/testimonials/:id").delete(youtubeLinkTestimonialsDeleteById);


export  default youtubeLinkRoute