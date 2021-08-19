import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { createPost } from "../graphql/mutations";
import { EditorContent, useEditor } from "@tiptap/react";
import { defaultExtensions } from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Mention from "@tiptap/extension-mention";
import Placeholder from "@tiptap/extension-placeholder";
import { MenuBar } from "@src/common/components/blocks/Editor/menu-bar";

// import MentionList from "./MentionList";

const initialState = { title: "", content: "" };

function TextEditor() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  const editor = useEditor({
    extensions: [
      ...defaultExtensions(),

      Paragraph.configure({
        HTMLAttributes: {
          class: "text-gray-700 text-[18px]",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-sm",
        },
      }),
      Placeholder,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion: {
          items: (query) => {
            return [
              "Lea Thompson",
              "Cyndi Lauper",
              "Tom Cruise",
              "Madonna",
              "Jerry Hall",
              "Joan Collins",
              "Winona Ryder",
              "Christina Applegate",
              "Alyssa Milano",
              "Molly Ringwald",
              "Ally Sheedy",
              "Debbie Harry",
              "Olivia Newton-John",
              "Elton John",
              "Michael J. Fox",
              "Axl Rose",
              "Emilio Estevez",
              "Ralph Macchio",
              "Rob Lowe",
              "Jennifer Grey",
              "Mickey Rourke",
              "John Cusack",
              "Matthew Broderick",
              "Justine Bateman",
              "Lisa Bonet",
            ]
              .filter((item) =>
                item.toLowerCase().startsWith(query.toLowerCase())
              )
              .slice(0, 10);
          },
        },
      }),
    ],
    // content: "<p>Start typing...</p>",

    editorProps: {
      attributes: {
        class:
          "prose prose-sm  min-h-[120px] px-5 sm:prose lg:prose-lg xl:prose-2xl my-5 focus:outline-none",
      },
    },
  });
  async function createNewPost() {
    const html = editor.getHTML();
    if (!title || html === "<p></p>") return;
    const id = uuid();
    post.id = id;
    console.log(post);
    await API.graphql({
      query: createPost,
      variables: { input: { title: post.title, id: post.id, content: html } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new post
      </h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <div className="w-1/3 border-[1px] rounded-md mb-3 p-4">
        <div className="border-b">
          <MenuBar editor={editor} />
        </div>
        <EditorContent editor={editor} />
      </div>

      <button
        type="button"
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >
        Create Post
      </button>
    </div>
  );
}

export default TextEditor;
