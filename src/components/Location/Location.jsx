import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from "react-icons/fa";
import GoogleMapReact from 'google-map-react';


/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: 33.2221, lng: -97.1307 }, // 500 N Bell Ave #109, Denton, TX 76209
    mapTypeControl: false,
  });
  geocoder = new google.maps.Geocoder();

  const inputText = document.createElement("input");

  inputText.type = "text";
  inputText.placeholder = "Enter a location";

  const submitButton = document.createElement("input");

  submitButton.type = "button";
  submitButton.value = "Geocode";
  submitButton.classList.add("button", "button-primary");

  const clearButton = document.createElement("input");

  clearButton.type = "button";
  clearButton.value = "Clear";
  clearButton.classList.add("button", "button-secondary");
  response = document.createElement("pre");
  response.id = "response";
  response.innerText = "";
  responseDiv = document.createElement("div");
  responseDiv.id = "response-container";
  responseDiv.appendChild(response);

  const instructionsElement = document.createElement("p");

  instructionsElement.id = "instructions";
  instructionsElement.innerHTML =
    "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(
    instructionsElement
  );
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
  marker = new google.maps.Marker({
    map,
    position: { lat: 33.2221, lng: -97.1307 },
  });
  map.setCenter({ lat: 33.2221, lng: -97.1307 });
  marker.setMap(map);
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  clearButton.addEventListener("click", () => {
    clear();
  });
  clear();
}

function clear() {
  if (marker) marker.setMap(null);
}

function geocode(request) {
  clear();
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;
      if (!results || !results[0]) return;
      map.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      marker.setMap(map);
      if (response) response.innerText = JSON.stringify(result, null, 2);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });
}

function loadGoogleMapsScript(callback) {
  if (window.google && window.google.maps) {
    callback();
    return;
  }
  if (document.getElementById('google-maps-script')) return;
  const script = document.createElement("script");
  script.id = 'google-maps-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBEkFNltQ3E55RYcx3Cp_tn_UTkJ162SOY&callback=initMap`;
  script.async = true;
  window.initMap = callback;
  document.body.appendChild(script);
}

window.initMap = initMap;
const LocationSection = () => {
  useEffect(() => {
    loadGoogleMapsScript(initMap);
    // Cleanup: remove map and listeners if needed
    return () => {
      if (window.google && window.google.maps && map) {
        map = null;
      }
    };
  }, []);

  return (
    <section className="bg-[#024950] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold uppercase mb-2">Visit Our Shop</p>
          <h2 className="text-4xl font-bold  hover:border-yellow-500 border-b-4 inline-block">
            Our Location
          </h2>
          <p className="text-gray-400 mt-2">Conveniently located in Denton, TX:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Google Map Integration */}
          <div className="bg-[#003135] rounded-xl h-80 flex items-center justify-center overflow-hidden relative">
            <div id="map" className="w-full h-full" style={{ minHeight: '320px', borderRadius: '0.75rem' }}></div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#003135] rounded-xl p-6 space-y-6">
            <h3 className="text-xl font-semibold border-b-2 border-b-yellow-500 inline-block " >Contact Information</h3>
            

            {/* Address */}
            <div className="flex items-start gap-4 text-gray-300">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p>500 N Bell Ave #109, Denton, TX 76209</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 text-gray-300">
              <FaPhoneAlt className="text-yellow-500 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+1 940-612-9127</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://g.co/kgs/ssnix6z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0FA4AF] hover:bg-blue-300 text-black font-medium px-4 py-2 rounded flex items-center gap-2"
              >
                <FaDirections />
                Get Directions
              </a>
              <a
                href="tel:+19408081569"
                className="bg-black hover:bg-gray-700 border border-gray-700 text-white font-medium px-4 py-2 rounded flex items-center gap-2"
              >
                <FaPhoneAlt />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
