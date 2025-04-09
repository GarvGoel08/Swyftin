import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  Mail,
  Phone,
  Clock,
  Users,
  Copy,
  Calendar,
  File,
} from "lucide-react";

export default function CardComp({ reservation }) {
  return (
    <Card
      key={reservation.id}
      className="bg-gray-900 border-gray-800 overflow-hidden py-0 text-white"
    >
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded flex items-center justify-center text-white ${reservation.avatarColor}`}
            >
              {reservation.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{reservation.name}</span>
                <Badge
                  className={`
                          ${
                            reservation.status === "Confirmed"
                              ? "bg-green-500 hover:bg-green-600"
                              : reservation.status === "Canceled"
                              ? "bg-red-500 hover:bg-red-600"
                              : "bg-yellow-500 hover:bg-yellow-600"
                          }
                          text-white/70
                        `}
                >
                  {reservation.status}
                </Badge>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                Res. No: {reservation.reservationNo}
                {/* Copy Button */}
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:text-white hover:bg-transparent"
                  onClick={() =>
                    navigator.clipboard.writeText(reservation.reservationNo)
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-gray-700">
              <DropdownMenuItem className="text-white hover:bg-gray-800">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-gray-800">
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-gray-800">
                View Details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex justify-between max-[400px]:flex-col max-[400px]:gap-2">
            <div className="text-sm  min-[400px]:w-1/2">
              <div className="text-gray-400 mb-1 flex flex-row items-center">
                <Calendar className="h-4 w-4 inline mr-1" />
                Check-in / Check-out
              </div>
              <div>
                {reservation.checkIn} - {reservation.checkOut}
              </div>
            </div>
            <div className=" min-[400px]:w-1/2">
              <div className="text-sm flex flex-row items-center">
                <div className="text-gray-400 mb-1">
                  <Mail className="h-4 w-4 inline mr-1" />
                </div>
                <div className="text-blue-400">{reservation.email}</div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  {reservation.phone}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between max-[400px]:flex-col max-[400px]:gap-2">
            <div className="text-sm  min-[400px]:w-1/2">
              <div className="text-gray-400 mb-1">
                <Clock className="h-4 w-4 inline mr-1" /> Booking Date
              </div>
              <div>{reservation.bookingDate}</div>
            </div>
            <div className=" min-[400px]:w-1/2 text-sm">
              {/* Docs Icon and text*/}
              <div className="flex items-center gap-1 text-gray-400">
                <File className="h-4 w-4 inline mr-1 " />
                Docs
              </div>
              {reservation.bookingStatus && (
                <Badge
                  className={`mt-1 text-xs text-white/70 ${
                    reservation.bookingStatus === "Received"
                      ? "bg-green-500 hover:bg-green-600"
                      : reservation.bookingStatus === "Pending"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                >
                  {reservation.bookingStatus}
                </Badge>
              )}
            </div>
          </div>

          <div className="flex justify-between max-[400px]:flex-col max-[400px]:gap-2">
            <div className="text-sm  min-[400px]:w-1/2 h-full">
              <div className="text-gray-400 mb-1">
                <Users className="h-4 w-4 inline mr-1" /> Guests
              </div>
              <div className="flex items-center gap-1">
                {[...Array(2)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      i < reservation.guests ? "text-white" : "text-gray-600"
                    }
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ))}
                <span>{reservation.guests}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 mt-4 py-0 bg-black text-xs"
              >
                View Room
              </Button>
            </div>
            <div className=" min-[400px]:w-1/2 flex flex-col justify-end gap-2">
              <div className="text-sm">
                Total: <span className="font-bold">${reservation.total}</span>
              </div>
              <Badge
                className={` text-white/70
                      ${
                        reservation.due > 0
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-green-500 hover:bg-green-600"
                      }
                    `}
              >
                Due: ${reservation.due}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
