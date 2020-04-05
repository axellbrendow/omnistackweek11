import { celebrate, Segments, Joi } from "celebrate";
import paginate from "../paginate";

const schemaObjectQuery = {
  ...paginate.schemaObjectQuery,
};
const schemaQuery = Joi.object().keys(schemaObjectQuery);

const schemaObjectHeaders = {
  authorization: Joi.string().required(),
};
const schemaHeaders = Joi.object(schemaObjectHeaders).unknown();

const middleware = celebrate({
  [Segments.QUERY]: schemaQuery,
  [Segments.HEADERS]: schemaHeaders,
});

export default {
  schemaObjectQuery,
  schemaQuery,
  schemaObjectHeaders,
  schemaHeaders,
  middleware,
};
