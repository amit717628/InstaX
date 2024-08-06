import { Terminal, terminal } from "terminal-kit";
import { UserProfile } from "../interfaces/UserInfo";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from "../../config";
import { draw, drawAsString } from 'terminal-img';
import { viewProfile } from "../base/UserProfile";
import { UserMenu } from "../base/UserMenu";
import { FaceCheck } from "../main/FaceCheck";





export async function FetchUser(): Promise<UserProfile | any> {


try {

terminal.white.bgBrightBlack.bold("Enter Username :     ")

terminal.inputField({
    history: [], 
    cancelable: true 
}).promise.then(async (username) => {


    // Api 
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/info',
        params: {
          username_or_id_or_url: username
        },
        headers: {
          'x-rapidapi-key': config.apiKey,
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      };

//



const response: AxiosResponse = await axios.request(options);
const userProfile: UserProfile = response.data;

terminal.clear()

const body = await axios.get(userProfile.data.profile_pic_url_hd, { responseType: 'arraybuffer' });

try {
const faceChecks = (await FaceCheck(userProfile.data.profile_pic_url))

const faceCheck = faceChecks.body.faces[0]





const data = [
    ['Full Name', userProfile.data.full_name ?? "N/A"],
    ['Age', faceCheck.facialFeatures.AgeRange.Low?.toString() ?? "N/A"],
    ['Max Age', faceCheck.facialFeatures.AgeRange.High?.toString() ?? "N/A"],
    ['Gender', faceCheck.facialFeatures.Gender ?? "N/A"], 
    ['Username', userProfile.data.username ?? "N/A"],
    ['Bio', userProfile.data.biography ?? "N/A"],
    ['Followers', userProfile.data.follower_count?.toString() ?? "N/A"],
    ['Following', userProfile.data.following_count?.toString() ?? "N/A"],
    ['Profile Pic URL', userProfile.data.profile_pic_url ?? "N/A"],
    ['External URL', userProfile.data.external_url ?? "N/A"],
    ['Category', userProfile.data.category ?? "N/A"],
    ['Location', userProfile.data.location_data?.city_name ?? "N/A"],
    ['Country', userProfile.data.about?.country ?? "N/A"],
    ['Date Joined', userProfile.data.about?.date_joined ?? "N/A"],
    ['Date Joined (Timestamp)', userProfile.data.about?.date_joined_as_timestamp?.toString() ?? "N/A"],
    ['Former Usernames', userProfile.data.about?.former_usernames?.toString() ?? "N/A"],
    ['Account Type', userProfile.data.account_type?.toString() ?? "N/A"],
    ['Business Contact Method', userProfile.data.business_contact_method ?? "N/A"],
    ['Can Add FB Group Link On Profile', userProfile.data.can_add_fb_group_link_on_profile?.toString() ?? "N/A"],
    ['Can Hide Category', userProfile.data.can_hide_category?.toString() ?? "N/A"],
    ['Can Hide Public Contacts', userProfile.data.can_hide_public_contacts?.toString() ?? "N/A"],
    ['Contact Phone Number', userProfile.data.contact_phone_number ?? "N/A"],
    ['Current Catalog ID', userProfile.data.current_catalog_id ?? "N/A"],
    ['Direct Messaging', userProfile.data.direct_messaging ?? "N/A"],
    ['External Lynx URL', userProfile.data.external_lynx_url ?? "N/A"],
    ['FBID v2', userProfile.data.fbid_v2 ?? "N/A"],
    ['Has Anonymous Profile Picture', userProfile.data.has_anonymous_profile_picture?.toString() ?? "N/A"],
    ['Has Chaining', userProfile.data.has_chaining?.toString() ?? "N/A"],
    ['Has Guides', userProfile.data.has_guides?.toString() ?? "N/A"],
    ['Has IGTV Series', userProfile.data.has_igtv_series?.toString() ?? "N/A"],
    ['HD Profile Pic URL', userProfile.data.hd_profile_pic_url_info?.url ?? "N/A"],
    ['HD Profile Pic Height', userProfile.data.hd_profile_pic_url_info?.height?.toString() ?? "N/A"],
    ['HD Profile Pic Width', userProfile.data.hd_profile_pic_url_info?.width?.toString() ?? "N/A"],
    ['ID', userProfile.data.id ?? "N/A"],
    ['Is Business', userProfile.data.is_business?.toString() ?? "N/A"],
    ['Is Call to Action Enabled', userProfile.data.is_call_to_action_enabled?.toString() ?? "N/A"],
    ['Is Category Tappable', userProfile.data.is_category_tappable?.toString() ?? "N/A"],
    ['Is Eligible For Request Message', userProfile.data.is_eligible_for_request_message?.toString() ?? "N/A"],
    ['Is Favorite', userProfile.data.is_favorite?.toString() ?? "N/A"],
    ['Is Favorite for Clips', userProfile.data.is_favorite_for_clips?.toString() ?? "N/A"],
    ['Is Favorite for IGTV', userProfile.data.is_favorite_for_igtv?.toString() ?? "N/A"],
    ['Is Favorite for Stories', userProfile.data.is_favorite_for_stories?.toString() ?? "N/A"],
    ['Is Private', userProfile.data.is_private?.toString() ?? "N/A"],
    ['Is Profile Audio Call Enabled', userProfile.data.is_profile_audio_call_enabled?.toString() ?? "N/A"],
    ['Is Verified', userProfile.data.is_verified?.toString() ?? "N/A"],
    ['Latest Reel Media', userProfile.data.latest_reel_media?.toString() ?? "N/A"],
    ['Live Subscription Status', userProfile.data.live_subscription_status ?? "N/A"],
    ['Address Street', userProfile.data.location_data?.address_street ?? "N/A"],
    ['City ID', userProfile.data.location_data?.city_id ?? "N/A"],
    ['Instagram Location ID', userProfile.data.location_data?.instagram_location_id ?? "N/A"],
    ['Latitude', userProfile.data.location_data?.latitude?.toString() ?? "N/A"],
    ['Longitude', userProfile.data.location_data?.longitude?.toString() ?? "N/A"],
    ['Zip', userProfile.data.location_data?.zip ?? "N/A"],
    ['Media Count', userProfile.data.media_count?.toString() ?? "N/A"],
    ['Merchant Checkout Style', userProfile.data.merchant_checkout_style ?? "N/A"],
    ['Page ID', userProfile.data.page_id ?? "N/A"],
    ['Page Name', userProfile.data.page_name ?? "N/A"],
    ['Primary Profile Link Type', userProfile.data.primary_profile_link_type?.toString() ?? "N/A"],
    ['Professional Conversion Suggested Account Type', userProfile.data.professional_conversion_suggested_account_type?.toString() ?? "N/A"],
    ['Profile Context', userProfile.data.profile_context ?? "N/A"],
    ['Profile Pic ID', userProfile.data.profile_pic_id ?? "N/A"],
    ['Profile Pic URL HD', userProfile.data.profile_pic_url_hd ?? "N/A"],
    ['Public Email', userProfile.data.public_email ?? "N/A"],
    ['Public Phone Country Code', userProfile.data.public_phone_country_code ?? "N/A"],
    ['Public Phone Number', userProfile.data.public_phone_number ?? "N/A"],
    ['Seller Shoppable Feed Type', userProfile.data.seller_shoppable_feed_type ?? "N/A"],
    ['Show Shoppable Feed', userProfile.data.show_shoppable_feed?.toString() ?? "N/A"],
    ['Third Party Downloads Enabled', userProfile.data.third_party_downloads_enabled?.toString() ?? "N/A"],
    ['Total IGTV Videos', userProfile.data.total_igtv_videos?.toString() ?? "N/A"]
];



if(userProfile.data.profile_pic_url_hd !== null){
    await draw(body.data,{height: 50,width:50});
}

terminal("\n\n")
terminal.table(data, {
    hasBorder: true,
    contentHasMarkup: true ,
		borderChars: 'lightRounded' ,
		borderAttr: { color: 'red' } ,
		textAttr: { bgColor: 'default' } ,
		firstCellTextAttr: { bgColor: 'red' } ,
		firstRowTextAttr: { bgColor: 'red' } ,
		firstColumnTextAttr: { bgColor: 'black' } ,
		width: 100 ,
		fit: true  
        

 })


UserMenu(username,faceChecks)

return userProfile;

} catch(err){
  
}




})

} catch(err){
  console.log(err)
}

}