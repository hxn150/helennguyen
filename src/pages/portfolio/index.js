import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mt-10 pt-md-4">
          <Col lg="10">
            <h1 className="display-4 mb-4">Portfolio 💅🏻 </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <div className="po_items_row">
            {dataportfolio.map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p className="project-title">{data.title} 👩‍💻 </p>
                    <p>{data.description}</p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </HelmetProvider>
    </motion.div>
  );
};
