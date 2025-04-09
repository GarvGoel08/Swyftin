"use client";

import { useEffect, useState } from "react";
import { Search, Calendar, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "./components/Card";

export default function ReservationDashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [source, setSource] = useState("all");
  const [communication, setCommunication] = useState("all");
  const [payment, setPayment] = useState("all");

  const reservations = [
    {
      id: 1,
      name: "John Doe",
      status: "Pending",
      reservationNo: "112345",
      checkIn: "01/01/2024",
      checkOut: "01/05/2024",
      email: "john.doe@example.com",
      phone: "+1 234-567-890",
      bookingDate: "12/25/2023",
      bookingStatus: "Received",
      guests: 1,
      total: 500,
      due: 250,
      avatar: "B",
      avatarColor: "bg-blue-500",
      source: "website",
      communication: "email",
      payment: "partial",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Canceled",
      reservationNo: "112346",
      checkIn: "02/01/2024",
      checkOut: "02/03/2024",
      email: "jane.smith@example.com",
      phone: "+1 987-654-321",
      bookingDate: "01/15/2024",
      bookingStatus: "Pending",
      guests: 1,
      total: 300,
      due: 100,
      avatar: "H",
      avatarColor: "bg-red-500",
      source: "agent",
      communication: "phone",
      payment: "pending",
    },
    {
      id: 3,
      name: "Manoj",
      status: "Confirmed",
      reservationNo: "Testqweq",
      checkIn: "03/01/2024",
      checkOut: "03/03/2024",
      email: "nks@live.in",
      phone: "+1 989-654-321",
      bookingDate: "02/15/2024",
      bookingStatus: "Partial 1/2",
      guests: 1,
      total: 1300,
      due: 100,
      avatar: "M",
      avatarColor: "bg-yellow-500",
      source: "website",
      communication: "email",
      payment: "partial",
    },
    {
      id: 4,
      name: "Robert Chen",
      status: "Confirmed",
      reservationNo: "112347",
      checkIn: "01/10/2024",
      checkOut: "01/15/2024",
      email: "robert.chen@example.com",
      phone: "+1 555-123-4567",
      bookingDate: "12/30/2023",
      bookingStatus: "Received",
      guests: 1,
      total: 750,
      due: 50,
      avatar: "R",
      avatarColor: "bg-red-500",
      source: "phone",
      communication: "phone",
      payment: "paid",
    },
    {
      id: 5,
      name: "Lara Croft",
      status: "Pending",
      reservationNo: "223344",
      checkIn: "04/05/2024",
      checkOut: "04/10/2024",
      email: "lara.croft@example.com",
      phone: "+1 321-555-6789",
      bookingDate: "03/22/2024",
      bookingStatus: "In Progress",
      guests: 2,
      total: 900,
      due: 900,
      avatar: "L",
      avatarColor: "bg-pink-500",
      source: "agent",
      communication: "email",
      payment: "pending",
    },
    {
      id: 6,
      name: "Bruce Wayne",
      status: "Confirmed",
      reservationNo: "334455",
      checkIn: "04/15/2024",
      checkOut: "04/18/2024",
      email: "bruce.w@example.com",
      phone: "+1 111-222-3333",
      bookingDate: "03/30/2024",
      bookingStatus: "Received",
      guests: 1,
      total: 1200,
      due: 0,
      avatar: "B",
      avatarColor: "bg-gray-800",
      source: "website",
      communication: "phone",
      payment: "paid",
    },
    {
      id: 7,
      name: "Emily Rose",
      status: "Canceled",
      reservationNo: "445566",
      checkIn: "05/01/2024",
      checkOut: "05/05/2024",
      email: "emily.rose@example.com",
      phone: "+1 777-888-9999",
      bookingDate: "04/10/2024",
      bookingStatus: "Canceled",
      guests: 3,
      total: 1500,
      due: 0,
      avatar: "E",
      avatarColor: "bg-purple-600",
      source: "phone",
      communication: "email",
      payment: "paid",
    },
    {
      id: 8,
      name: "Tony Stark",
      status: "Confirmed",
      reservationNo: "556677",
      checkIn: "05/10/2024",
      checkOut: "05/12/2024",
      email: "tony.stark@example.com",
      phone: "+1 666-777-8888",
      bookingDate: "04/15/2024",
      bookingStatus: "Received",
      guests: 2,
      total: 2000,
      due: 500,
      avatar: "T",
      avatarColor: "bg-orange-600",
      source: "agent",
      communication: "phone",
      payment: "partial",
    },
  ];

  useEffect(() => {
    if (!reservations) return;

    const filtered = reservations.filter((reservation) => {
      const matchSearch =
        reservation.name.toLowerCase().includes(search.toLowerCase()) ||
        reservation.email?.toLowerCase().includes(search.toLowerCase()) ||
        reservation.phone?.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        status === "all" ||
        reservation.status?.toLowerCase() === status.toLowerCase();
      const matchSource =
        source === "all" ||
        reservation.source?.toLowerCase() === source.toLowerCase();
      const matchCommunication =
        communication === "all" ||
        reservation.communication?.toLowerCase() ===
          communication.toLowerCase();
      const matchPayment =
        payment === "all" ||
        reservation.payment?.toLowerCase() === payment.toLowerCase();

      return (
        matchSearch &&
        matchStatus &&
        matchSource &&
        matchCommunication &&
        matchPayment
      );
    });

    setFilteredReservations(filtered);
  }, [search, status, source, communication, payment]);

  const [filteredReservations, setFilteredReservations] =
    useState(reservations);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 border border-gray-700 rounded">
              <Menu className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-semibold">Reservations</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 bg-black hover:text-white hover:bg-blue-950"
            >
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">Create</Button>
            <Button
              variant="outline"
              className="bg-blue-500 border-gray-700 p-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 border-b border-gray-800">
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 bg-black border-gray-700 w-[200px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Select value={communication} onValueChange={setCommunication}>
            <SelectTrigger
              value={communication}
              className="w-[180px] bg-black border-gray-700"
            >
              <SelectValue placeholder="Communication" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-gray-700">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[150px] bg-black border-gray-700">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-gray-700">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="canceled">Canceled</SelectItem>
            </SelectContent>
          </Select>

          <Select value={source} onValueChange={setSource}>
            <SelectTrigger className="w-[150px] bg-black border-gray-700">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-gray-700">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="agent">Agent</SelectItem>
            </SelectContent>
          </Select>

          <Select value={payment} onValueChange={setPayment}>
            <SelectTrigger className="w-[150px] bg-black border-gray-700">
              <SelectValue placeholder="Payment" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-gray-700">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="partial">Partial</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="bg-black border-gray-700 flex items-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Pick date range
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto">
        {filteredReservations.map((reservation) => (
          <Card key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}
