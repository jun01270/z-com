import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";

export default function Home() {
  return (
    <>
      <main className={style.main}></main>
      <TabProvider>
        <Tab>
          <PostForm>
            <Post></Post>
          </PostForm>
        </Tab>
      </TabProvider>
    </>
  );
}
