export class Skill {
  public SkillCatalogueId: number;
  public SkillName: string;

  constructor(skillCatalogueId: number, skillName: string) {
    this.SkillCatalogueId = skillCatalogueId;
    this.SkillName = skillName;
  }
}
