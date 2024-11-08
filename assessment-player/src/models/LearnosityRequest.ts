export interface LearnosityRequest {
  security: {
    consumer_key: string;
    domain: string;
    timestamp: string;
    user_id: string;
    signature: string;
  };
  request: {
    user_id: string;
    activity_template_id?: string;
    session_id: string;
    activity_id: string;
    rendering_type: string;
    type: string;
    name: string;
    state?: string;
    meta?: {
      sdk: {
        version: string;
        lang: string;
        lang_version: string;
        platform: string;
        platform_version: string;
      };
    };
  };
}
