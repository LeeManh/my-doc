import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "My Documents",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>My Documents sẽ bao gồm những ghi chú học tập của tôi. 🎉</>,
  },
  // {
  //   title: "Focus on What Matters",
  //   Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
  //   description: <></>,
  // },
  // {
  //   title: "Powered by React",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: (
  //     <>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id rerum
  //       facere repellat autem praesentium assumenda laudantium, delectus tempore
  //       numquam totam!
  //     </>
  //   ),
  // },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
