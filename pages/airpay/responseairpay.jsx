import React from "react";

const ResponseAirpay = ({ data }) => {
  return (
    <>
      <div className="osdo">
        <h3 className="text-center my-20">
          We have Recieved your Booking Request. <br /> We will send you a email
          after booking confirmation.
        </h3>
      </div>
    </>
  );
};

export default ResponseAirpay;

export async function getServerSideProps(context) {
  console.log(context.req.method);

  return {
    props: { data: null }, // will be passed to the page component as props
  };
}
