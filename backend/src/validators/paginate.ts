import { celebrate, Segments, Joi } from "celebrate";

const schemaObjectQuery = {
  page: Joi.number().min(1),
  pageSize: Joi.number().min(1),
};
const schemaQuery = Joi.object().keys(schemaObjectQuery);

const middleware = celebrate({ [Segments.QUERY]: schemaQuery });

export default { schemaObjectQuery, schemaQuery, middleware };
