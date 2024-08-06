interface Data {
    full_name: string;
    id: string;
    is_private: boolean;
    is_verified: boolean;
    profile_pic_url: string;
    username: string;
  }
  
  export interface Followers {
    count: number;
    items: Data[];
  }