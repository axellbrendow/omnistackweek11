import { celebrate, Segments, Joi } from "celebrate";

const schemaObjectBody = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  whatsapp: Joi.string()
    // .regex(/^\d{2}\d?\d{8}$/)
    .required(),
  city: Joi.string().required(),
  fu: Joi.string().length(2).required(),
};
const schemaBody = Joi.object().keys(schemaObjectBody);

const middleware = celebrate({ [Segments.BODY]: schemaBody });

export default { schemaObjectBody, schemaBody, middleware };
