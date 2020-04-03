import Incident from "./Incident";

class NGO {
  public id!: string;

  public name!: string;

  public email!: string;

  public whatsapp!: string;

  public city!: string;

  public uf!: string;

  public readonly createAt!: Date;

  public readonly updatedAt!: Date;

  public readonly incidents?: Incident[];
}

export default NGO;
