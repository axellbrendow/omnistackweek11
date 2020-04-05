import { celebrate, Segments, Joi } from "celebrate";
import ngoValidator from "../ngo";

const schemaObjectBody = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  value: Joi.number().positive().required(),
};
const schemaBody = Joi.object().keys(schemaObjectBody);

const schemaObjectHeaders = {
  authorization: ngoValidator.listIncidents.schemaObjectHeaders.authorization,
};
const schemaHeaders = Joi.object(schemaObjectHeaders).unknown();

const middleware = celebrate({
  [Segments.BODY]: schemaBody,
  [Segments.HEADERS]: schemaHeaders,
});

export default {
  schemaObjectBody,
  schemaBody,
  schemaObjectHeaders,
  schemaHeaders,
  middleware,
};
