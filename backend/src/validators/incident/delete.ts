import { celebrate, Segments, Joi } from "celebrate";
import ngoValidator from "../ngo";

const schemaObjectParams = {
  id: Joi.number().min(1).required(),
};
const schemaParams = Joi.object().keys(schemaObjectParams);

const schemaObjectHeaders = {
  authorization: ngoValidator.listIncidents.schemaObjectHeaders.authorization,
};
const schemaHeaders = Joi.object(schemaObjectHeaders).unknown();

const middleware = celebrate({
  [Segments.PARAMS]: schemaParams,
  [Segments.HEADERS]: schemaHeaders,
});

export default {
  schemaObjectParams,
  schemaParams,
  schemaObjectHeaders,
  schemaHeaders,
  middleware,
};
