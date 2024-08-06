import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import FormData from 'form-data';
import config from '../../config';

export interface FaceAnalysisResponse {
    statusCode: number;
    body: {
      faces: Array<{
        boundingBox: {
          topLeft: { x: number; y: number };
          bottomRight: { x: number; y: number };
        };
        facialFeatures: {
          Gender: string;
          Smile: boolean;
          Eyeglasses: boolean;
          Sunglasses: boolean;
          AgeRange: { Low: number; High: number };
          Emotions: string[];
        };
        landmarks: {
          eyeLeft: {
            center: { x: number; y: number };
            left: { x: number; y: number };
            right: { x: number; y: number };
            down: { x: number; y: number };
            up: { x: number; y: number };
          };
          eyeRight: {
            center: { x: number; y: number };
            left: { x: number; y: number };
            right: { x: number; y: number };
            down: { x: number; y: number };
            up: { x: number; y: number };
          };
          mouth: {
            left: { x: number; y: number };
            right: { x: number; y: number };
            down: { x: number; y: number };
            up: { x: number; y: number };
          };
          nose: {
            center: { x: number; y: number };
            left: { x: number; y: number };
            right: { x: number; y: number };
          };
          browLeft: {
            left: { x: number; y: number };
            right: { x: number; y: number };
            up: { x: number; y: number };
          };
          browRight: {
            left: { x: number; y: number };
            right: { x: number; y: number };
            up: { x: number; y: number };
          };
          chinBottom: { x: number; y: number };
        };
      }>;
    };
  }

export async function FaceCheck(url: string): Promise<FaceAnalysisResponse | null> {
  const data = new FormData();
  data.append('url', url); // Use the function parameter `url`

  const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://faceanalyzer-ai.p.rapidapi.com/faceanalysis',
    headers: {
      'x-rapidapi-key': config.FaceApiKey,
      'x-rapidapi-host': 'faceanalyzer-ai.p.rapidapi.com',
      ...data.getHeaders(),
    },
    data: data
  };

  try {
    const response: AxiosResponse<FaceAnalysisResponse> = await axios.request(options);
    return response.data; // Return the response data
    
  } catch (error) {
    console.error(error);
    return null; // Return null in case of error
  }
}
