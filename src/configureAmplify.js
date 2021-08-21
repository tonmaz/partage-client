import Amplify from "aws-amplify";
import awsconfig from "./aws-config";

Amplify.configure({ ...awsconfig, ssr: true });
