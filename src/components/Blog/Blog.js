// src/components/Blog.js
import React from "react";
import styles from "./Blog.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <>
      <Header />
      <section id="blog" className={styles.blog}>
        <div className={styles.container}>
          <h2>Latest from Our Blog</h2>
          <div className={styles.blogPosts}>
            <div className={styles.blogPost}>
              <img
                src="Image4.jpeg"
                width={500}
                height={300}
                alt="Blog Post 1"
                className={styles.blogImage}
              />
              <h3>Innovations in Precision Farming</h3>
              <p>
                Explore the latest advancements in precision farming
                technology...
              </p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.blogPost}>
              <img
                src="Image5.jpg"
                width={500}
                height={300}
                alt="Blog Post 2"
                className={styles.blogImage}
              />
              <h3>Benefits of Sustainable Agriculture</h3>
              <p>
                Learn how sustainable practices are essential for the future of
                farming and the environment.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
