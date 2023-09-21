import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, photoportfolio } from "../../content_option";
// 
export const PhotoPortfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Gallery | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mt-10 pt-md-4">
          <Col lg="10">
            <h1 className="display-4 mb-4"> Gallery ⭐</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <div className="po_items_row">
            {photoportfolio.map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p className="project-title">{data.title} 🛴 </p>
                    <p className="service_desc">
                      {data.description.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
