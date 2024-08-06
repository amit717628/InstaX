interface ProfileItem {
    full_name: string;
    id: string;
    is_new: boolean;
    is_private: boolean;
    is_verified: boolean;
    latest_reel_media: number;
    profile_pic_id: string;
    profile_pic_url: string;
    username: string;
  }
  
  interface Data {
    count: number;
    items: ProfileItem[];
    total: number;
  }
  
  export interface LikeRes {
    data: Data;
  }
  
  // BY AMIT717628