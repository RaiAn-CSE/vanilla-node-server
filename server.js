const http = require("http");
const PORT = 4000

const server = http.createServer((req, res) => {

    if (req.url == "/" && req.method === "GET") {
        res.end("Hi there, This is Home Page");
    }

    if (req.url == "/about" && req.method === "GET") {
        const about = [
            {
                name: "RaiAn",
                Id: 2324242,
            },
            {
                name: "NaiMa",
                Id: 8576568,
            },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(about));
    }


    if (req.url == "/about" && req.method === "POST") {
        let body = "";
        // Collect data sent from the client
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            // Parse the received data
            const receivedData = JSON.parse(body);

            const about = [
                {
                    name: "RaiAn",
                    Id: 2324242,
                },
                {
                    name: "NaiMa",
                    Id: 8576568,
                },
                {
                    name: receivedData.name, // Include the client-provided name
                    Id: receivedData.Id,    // Include the client-provided ID
                },
            ];
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(about));
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server running port on ${PORT}`);
});
