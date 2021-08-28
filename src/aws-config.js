const awsconfig = {
  aws_appsync_graphqlEndpoint: `${process.env.NEXT_PUBLIC_APPSYNC_API}`,
  aws_appsync_region: `${process.env.NEXT_PUBLIC_REGION}`,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-pwr4gkc7lffu7l3teg3pzmqi6i',
  Auth: {
      identityPoolId: `${process.env.NEXT_PUBLIC_IDENTITY_POOL_ID}`,
      region: `${process.env.NEXT_PUBLIC_REGION}`,
      identityPoolRegion: `${process.env.NEXT_PUBLIC_REGION}`,
      userPoolId: `${process.env.NEXT_PUBLIC_USER_POOL_ID}`,
      userPoolWebClientId: `${process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID}`,
  },
};

export default awsconfig;
