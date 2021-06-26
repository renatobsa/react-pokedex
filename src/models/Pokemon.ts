
export type Pokemon = {
    abilities:AbilitiesEntity[];
    base_experience: number;
    height: number;
    id: number;
    name: string;
    species: TypeNameUrl;
    stats: StatsEntity[];
    types: TypesEntity[];
    weight: number;
  }
  type AbilitiesEntity = {
    ability: TypeNameUrl;
    is_hidden: boolean;
    slot: number;
  }
  type TypeNameUrl = {
    name: string;
    url: string;
  }
  type StatsEntity = {
    base_stat: number;
    effort: number;
    stat: TypeNameUrl;
  }
  type TypesEntity = {
    slot: number;
    type: TypeNameUrl;
  }
  