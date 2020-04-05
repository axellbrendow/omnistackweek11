import { celebrate, Segments, Joi } from "celebrate";
import paginate from "../paginate";

const schemaObjectQuery = {
  ...paginate.schemaObjectQuery,
};
const schemaQuery = Joi.object().keys(schemaObjectQuery);

const middleware = celebrate({ [Segments.QUERY]: schemaQuery });

export default { schemaObjectQuery, schemaQuery, middleware };
