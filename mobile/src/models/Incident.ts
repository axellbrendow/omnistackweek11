import NGO from "./NGO";

class Incident {
  public id!: number;

  public title!: string;

  public description!: string;

  public value!: number;

  public ngoId!: string;

  public NGO?: NGO;

  public readonly createAt!: Date;

  public readonly updatedAt!: Date;
}

export default Incident;
