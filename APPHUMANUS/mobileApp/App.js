import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import { AuthScreen2 } from "./screens";
import { Feed } from "./screens";

import { ProfilePage } from "./screens";

import {Animals} from "./screens";
//wrap all your pages in this router
export default function App() {
  return (
    <Router>
      <Routes>
        {/* keep adding routes to new pages */}
        <Route path="/" element={<Feed />} />
        <Route path="/authscreen2" element={<AuthScreen2 />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
