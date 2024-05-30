import React, { useState } from "react";
import nutriImg from "../../assets/Page Assets/Home/NutritionalProgram.png";
import Input from "../../components/Input Fields/Input";
import axios from "axios";

const ClassPage = () => {
  //Initating the Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    city: "",
  });


  //Handle Change on the input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
//Creating the order on the amount change
    const amount = 1000;
    const {
      data: { order },
    } = await axios.post("/api/v1/class_booking/user/payments", {
      amount,
    });

    // console.log(formData)
    
// Creating Options of the RazorPay Instance
    const options = {
      key: "rzp_test_mgIOiPxqkVU1bf", // Enter the Key ID generated from the Dashboard//Should BE in the Env File
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Collasyn",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const paymentData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          formData,
        };
        try {
          const verifyUrl = "/api/v1/class_booking/user/setClass_booking";
          const verifyResponse = await axios.post(verifyUrl, paymentData);
          if (verifyResponse.data.success) {
            alert("Payment successful and data saved!");
          } else {
            alert("Payment verification failed!");
          }
        } catch (error) {
          console.error("Verification error:", error);
        }
      },
      theme: {
        color: "#33cc99",
      },
    };
    const razor = new Razorpay(options);
    razor.open();
  };

  return (
    <div className="h-auto p-6 px-10 my-10 bg-white">
      <div className="p-10 w-full flex flex-col md:flex-row justify-around items-center">
        <div className="w-full text-center md:w-3/5 md:text-start">
          <p className="text-amber-900 font-bold text-4xl">డా.రామచంద్ర’s</p>
          <div>
            <h1 className="text-red-400 font-bold text-6xl mb-2">
              Naturopathy Workshop
            </h1>
            <p className="text-red-400 text-lg">
              Explore a variety of holistic classes, from yoga to herbal
              remedies, and effortlessly reserve your spot.
            </p>
          </div>
        </div>
        <div className="w-3/5 my-auto md:2/5 flex justify-center md:justify-end">
          <img src={nutriImg} className="w-full md:w-96" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="my-8">
          <p className="text-lg text-green-700 font-semibold">
            21 రోజుల ప్రకృతే వైద్యుడు వర్కషాప్ 22th May 2024 నుంచి ప్రారంభం
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row bg-green-100 rounded-2xl p-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="">
              <img src={nutriImg} className="w-full md:w-52 my-2" />
              <p className="font-medium text-lg text-center">
                Online classes Preview
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-green-700 font-medium">
            <p className="text-center mb-10">
              ప్రస్తుత ప్రపంచానికి అసాధ్యం అనిపించే అనారోగ్య సమస్యల సైతం ఇంటి
              వద్దనే ఎలా తేలికగా తగ్గుతాయో అందరికీ అర్థం అయ్యేలా చెప్పిన, తెలుగు
              జాతికి సుపరిచితులయిన, ఎన్నో లక్షల మందిని ప్రత్యక్షంగా, యూట్యూబ్,
              టివీల ద్వారా ఆరోగ్యవంతులుగా మార్చిన "డా.ఏ.పీ.జే. అబ్దుల్ కలాం
              నేషనల్ అవార్డ్ గ్రహీత", "ఏ లివింగ్ చరక బిరుదు గ్రహీత" ప్రముఖ
              ప్రకృతి వైద్యులు డా.రామచంద్ర మరియు డా.పద్మ గార్లచే ప్రకృతి జీవన
              విధానంపై శిక్షణా కార్యక్రమాలు.
            </p>

            <p className="text-center">
              Online trainings on Naturopathic lifestyle that changes
              everything. An ancient knowledge with modern scientific approach
              that healed lakhs of people from uncurable ailments, by Dr. Padma
              & Dr. Ramachandra ("Dr. APJ Abdul Kalam National" Awardee & "A
              Living Charaka" Awardee)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-100 rounded-2xl p-6 px-10 my-10 flex flex-col justify-center items-center">
        <div className="">
          <p className="text-center font-medium text-2xl">Book Your Seat</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 my-4">
            <Input
              label="Name *"
              type="text"
              placeholder="Enter your name here"
              className="border-[1px] border-green-700 w-full md:w-5/6"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Email *"
              type="email"
              placeholder="Enter your email here"
              className="border-[1px] border-green-700 w-full md:w-5/6"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="Whatsapp number *"
              type="text"
              placeholder="Whatsapp Number only"
              className="border-[1px] border-green-700 w-full md:w-5/6"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />

            <Input
              label="City (Optional)"
              type="text"
              placeholder="Enter your name here"
              className="border-[1px] border-green-700 w-full md:w-5/6"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <p className="my-6">
            <span className="text-red-400 font-medium">గమనిక: </span>
            You will get updates on your WhatsApp number. పైన మీ వాట్సాప్ ఫోన్
            నంబరు సరిగ్గా ఎంటర్ చేయకపోతే ట్రైనింగ్ లో పాల్గొనలేరు.
          </p>

          <div className="">
            <div className="flex items-center justify-center">
              <Input type="checkbox" id="checkbox" className="mr-2" />
              <label htmlFor="checkbox" className="mt-5">
                I agree and accept the payment ‘terms and conditions’. & I
                understand that this training is NOT a substitute for the
                consultation, diagnosis, and/or medical treatment. *
              </label>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <button
              type="submit"
              className="bg-green-500 text-black p-2 px-4 w-44 rounded-lg font-medium"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>

      <div className="my-10">
        <p className="text-sm text-amber-800">
          <span className="font-medium text-lg">
            Important Note About Registrations:
          </span>
          <br />
          When registering, please double-check that you have entered your phone
          number correctly. In the event that you provide incorrect information,
          we will be unable to contact you. Thank you for your cooperation.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center my-10">
        <div className="w-5/6">
          <div className="my-4 text-center">
            <p className="font-semibold text-2xl">FAQs</p>
          </div>
          <div className="w-full">
            <div className="flex justify-between my-2">
              <p className="text-lg">
                1. What conditions can Naturopathy help with?
              </p>
              <span className="text-4xl font-medium">+</span>
            </div>
            <div className="flex justify-between  my-2">
              <p className="text-lg">
                2. What can I expect from a Naturopathic consultation?
              </p>
              <span className="text-4xl font-medium">+</span>
            </div>
            <div className="flex justify-between  my-2">
              <p className="text-lg">
                3. How long does it take to see results with Naturopathy?
              </p>
              <span className="text-4xl font-medium">+</span>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-lg">
                4. Are Naturopathic treatments evidence-based?
              </p>
              <span className="text-4xl font-medium">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClassPage;
