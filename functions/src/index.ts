import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
import Replicate from "replicate";
import {initializeApp} from "firebase-admin/app";
import cors from "cors";

initializeApp();
setGlobalOptions({maxInstances: 10});

const corsHandler = cors({
  origin: ["http://localhost:3001"],
});

export const generator = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const body = JSON.parse(req.body.toString("utf8"));

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN!,
    });

    const output = await replicate.run(
      "lucataco/sdxl-controlnet:db2ffdbdc7f6cb4d6dab512434679ee3366ae7ab84f89750f8947d5594b79a47",
      {
        input: {
          image: body.image,
          prompt: "a picture of a house at night",
          condition_scale: 0.5,
        },
      },
    );

    res.send(output);
  });
});
