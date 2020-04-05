import { celebrate, Segments, Joi } from "celebrate";

const schemaObjectBody = { id: Joi.string().required() };
const schemaBody = Joi.object().keys(schemaObjectBody);

const middleware = celebrate({ [Segments.BODY]: schemaBody });

export default { schemaObjectBody, schemaBody, middleware };
