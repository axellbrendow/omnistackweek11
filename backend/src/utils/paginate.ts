export default ({ page = 1, pageSize = 2 }) => ({
  offset: (page - 1) * pageSize,
  limit: pageSize,
});
