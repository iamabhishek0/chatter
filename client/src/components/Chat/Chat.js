import React, { useState, useEffect } from "react";
import QueryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const ENDPOINT = "localhost:5000";

	socket = io(ENDPOINT);
	useEffect(() => {
		const { name, room } = QueryString.parse(location.search);
		setName(name);
		setRoom(room);
		// console.log(socket);
	});
	return <h1>Chat</h1>;
};

export default Chat;
