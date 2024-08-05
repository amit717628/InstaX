export interface UserProfile {
    data: {
      about: {
        country: string;
        date_joined: string;
        date_joined_as_timestamp: number;
        former_usernames: number;
      };
      account_badges: any[]; 
      account_type: number;
      active_standalone_fundraisers: {
        fundraisers: any[]; 
        total_count: number;
      };
      ads_incentive_expiration_date: string | null;
      ads_page_id: string | null;
      ads_page_name: string | null;
      bio_links: {
        is_pinned: boolean;
        link_id: number;
        link_type: string;
        lynx_url: string;
        open_external_url_with_in_app_browser: boolean;
        title: string;
        url: string;
      }[];
      biography: string;
      biography_email: string | null;
      biography_with_entities: {
        entities: {
          user: {
            id: number;
            username: string;
          };
        }[];
        raw_text: string;
      };
      business_contact_method: string;
      can_add_fb_group_link_on_profile: boolean;
      can_hide_category: boolean;
      can_hide_public_contacts: boolean;
      category: string;
      category_id: number;
      contact_phone_number: string;
      current_catalog_id: string | null;
      direct_messaging: string;
      external_lynx_url: string;
      external_url: string;
      fbid_v2: string;
      follower_count: number;
      following_count: number;
      full_name: string;
      has_anonymous_profile_picture: boolean;
      has_chaining: boolean;
      has_guides: boolean;
      has_igtv_series: boolean;
      hd_profile_pic_url_info: {
        height: number;
        url: string;
        width: number;
      };
      hd_profile_pic_versions: {
        height: number;
        url: string;
        width: number;
      }[];
      id: string;
      is_business: boolean;
      is_call_to_action_enabled: boolean;
      is_category_tappable: boolean;
      is_eligible_for_request_message: boolean;
      is_favorite: boolean;
      is_favorite_for_clips: boolean;
      is_favorite_for_igtv: boolean;
      is_favorite_for_stories: boolean;
      is_private: boolean;
      is_profile_audio_call_enabled: boolean;
      is_verified: boolean;
      latest_reel_media: number;
      live_subscription_status: string;
      location_data: {
        address_street: string;
        city_id: string | null;
        city_name: string;
        instagram_location_id: string;
        latitude: number | null;
        longitude: number | null;
        zip: string;
      };
      media_count: number;
      merchant_checkout_style: string;
      page_id: string | null;
      page_name: string | null;
      pinned_channels_info: {
        has_public_channels: boolean;
        pinned_channels_list: any[]; 
      };
      primary_profile_link_type: number;
      professional_conversion_suggested_account_type: number;
      profile_context: string;
      profile_context_facepile_users: any[]; 
      profile_context_links_with_user_ids: any[]; 
      profile_pic_id: string;
      profile_pic_url: string;
      profile_pic_url_hd: string;
      public_email: string;
      public_phone_country_code: string;
      public_phone_number: string;
      seller_shoppable_feed_type: string;
      show_shoppable_feed: boolean;
      third_party_downloads_enabled: number;
      total_igtv_videos: number;
      upcoming_events: any[]; 
      username: string;
    };
  }
  