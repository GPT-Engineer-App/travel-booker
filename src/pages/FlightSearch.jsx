import { useState } from "react";
import { Container, Heading, VStack, Input, Button, Box, Text, SimpleGrid } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);

  const searchFlights = () => {
    // Mock data for demonstration purposes
    const mockFlights = [
      { id: 1, airline: "Airline A", departure: "City A", arrival: "City B", price: "$200" },
      { id: 2, airline: "Airline B", departure: "City A", arrival: "City B", price: "$250" },
    ];
    setFlights(mockFlights);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" textAlign="center">
          Search Flights
        </Heading>
        <Input
          placeholder="Departure Location"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <Input
          placeholder="Arrival Location"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Departure Date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <Button colorScheme="blue" onClick={searchFlights}>
          Search Flights
        </Button>
        <Box width="100%" mt={8}>
          <Heading as="h3" size="lg" textAlign="center" mb={4}>
            Available Flights
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            {flights.map((flight) => (
              <Box key={flight.id} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                <Text>Airline: {flight.airline}</Text>
                <Text>Departure: {flight.departure}</Text>
                <Text>Arrival: {flight.arrival}</Text>
                <Text>Price: {flight.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default FlightSearch;