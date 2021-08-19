import useSWR from "swr";
import { API } from "aws-amplify";
import { getPost } from "@src/graphql/queries";

export const usePosts = (query, initialdata) => {
  const { data, error } = useSWR(query, fetcher);
  console.log(data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const fetcher = async (url) =>
  await API.graphql({
    query: url,
  });

export const usePost = (query, id, post) => {
  const { data, error } = useSWR([query, id], getPostbyId, {
    initialdata: post,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const getPostbyId = async (url, id) => {
  const postData = await API.graphql({
    query: url,
    variables: { id },
  });

  return postData;
};
