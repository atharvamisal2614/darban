import React from "react";

const success = ({ data }) => {
  return (
    <div className="osdo">
      <h3 className="text-center my-20">
        We have Recieved your Booking Request. <br /> We will send you a email
        after booking confirmation.
      </h3>
    </div>
  );
};

export default success;

const streamToString = async (stream) => {
  if (stream) {
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(Buffer.from(chunk));
    }
    return Buffer.concat(chunks).toString("utf-8");
  }
  return null;
};

export async function getServerSideProps(context) {
  let data = null;
  console.log(context.req.method);
  if (context.req.method === "POST") {
    const body = await streamToString(context.req);
    data = JSON.parse(body);
  }

  console.log(data);

  return {
    props: { data },
  };
}
