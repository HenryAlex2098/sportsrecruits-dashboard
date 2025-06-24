"use client"

import { useState } from "react"
import { SmoothLink } from "@/components/smooth-link"
import {
  Activity,
  User,
  MessageSquare,
  GraduationCap,
  Play,
  Grid3X3,
  Crown,
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Star,
  Archive,
  Phone,
  Video,
  Info,
  CheckCheck,
  Check,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SquashLogo } from "@/components/squash-logo"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [messageText, setMessageText] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Coach Sarah Williams",
      school: "Stanford University",
      avatar: "SW",
      lastMessage: "I'd love to discuss your track times and potential scholarship opportunities.",
      time: "2:30 PM",
      unread: 2,
      online: true,
      type: "coach",
    },
    {
      id: 2,
      name: "Coach Mike Johnson",
      school: "UCLA",
      avatar: "MJ",
      lastMessage: "Great performance at the state championships! Let's schedule a call.",
      time: "1:45 PM",
      unread: 0,
      online: false,
      type: "coach",
    },
    {
      id: 3,
      name: "Recruiting Team",
      school: "University of Oregon",
      avatar: "UO",
      lastMessage: "We have some exciting opportunities for 2027 graduates.",
      time: "11:20 AM",
      unread: 1,
      online: true,
      type: "team",
    },
    {
      id: 4,
      name: "Coach David Chen",
      school: "Harvard University",
      avatar: "DC",
      lastMessage: "Your academic profile is impressive. Would you be interested in visiting our campus?",
      time: "Yesterday",
      unread: 0,
      online: false,
      type: "coach",
    },
    {
      id: 5,
      name: "Athletic Department",
      school: "Duke University",
      avatar: "DU",
      lastMessage: "Thank you for your interest in our program.",
      time: "Yesterday",
      unread: 0,
      online: false,
      type: "department",
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Coach Sarah Williams",
      content:
        "Hi Yuli! I've been following your track and field progress this season. Your times in the 400m are really impressive for a junior.",
      time: "2:25 PM",
      isOwn: false,
      read: true,
    },
    {
      id: 2,
      sender: "You",
      content:
        "Thank you so much, Coach Williams! I've been working really hard to improve my times. Stanford has always been my dream school.",
      time: "2:28 PM",
      isOwn: true,
      read: true,
    },
    {
      id: 3,
      sender: "Coach Sarah Williams",
      content:
        "I'd love to discuss your track times and potential scholarship opportunities. Are you available for a call this week?",
      time: "2:30 PM",
      isOwn: false,
      read: false,
    },
    {
      id: 4,
      sender: "Coach Sarah Williams",
      content:
        "Also, I'd like to invite you to visit our campus next month. We have a great program and I think you'd be a perfect fit for our team.",
      time: "2:31 PM",
      isOwn: false,
      read: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Top Header */}
      <header className="relative bg-white backdrop-blur-xl border-b border-white/5 text-black px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <SquashLogo className="w-8 h-8" />
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm bg-gradient-to-r from-teal-400 to-red-400 bg-clip-text text-transparent font-medium">
              Any questions? Call:{" "}
              <span className="text-teal-400 hover:text-teal-300 transition-colors">917-633-6188</span>
            </span>
            <Button className="bg-gradient-to-r from-teal-600 to-red-600 hover:from-teal-700 hover:to-red-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Crown className="w-4 h-4 mr-2" />
              Upgrade Account
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Header */}
      <header className="relative bg-black backdrop-blur-xl border-b border-white/10 text-white px-4 py-4">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <nav className="flex items-center gap-6">
            {[
              { icon: Activity, label: "Activity", href: "/" },
              { icon: User, label: "Profile", href: "/profile" },
              { icon: MessageSquare, label: "Messages", active: true, href: "/messages" },
              { icon: GraduationCap, label: "Schools", href: "/schools" },
              { icon: Play, label: "Video", href: "/video" },
            ].map(({ icon: Icon, label, active, href }) => (
              <SmoothLink key={label} href={href}>
                <div
                  className={`flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 ${
                    active ? "text-teal-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${active ? "bg-teal-500/20" : "hover:bg-white/10"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              </SmoothLink>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-col items-center gap-1 text-xs cursor-pointer transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white">
                <div className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                  <Grid3X3 className="w-5 h-5" />
                </div>
                <span className="font-medium">More</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-80 bg-white border border-gray-200 shadow-xl rounded-lg p-0 mt-2"
              >
                <div className="p-4 space-y-1">
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Pricing and Features</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">My Account</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Help</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Recruiting Resource Center</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Webinars</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <span className="text-gray-700 font-medium">Blog</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="my-2" />

                <div className="p-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      YG
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">yuli geva, 2027</h4>
                      <p className="text-sm text-gray-600">Women's Track and field</p>
                      <p className="text-xs text-blue-600">avner.geva@gmail.com</p>
                    </div>
                  </div>
                  <DropdownMenuItem className="flex items-center gap-2 p-3 mt-2 hover:bg-gray-50 rounded-lg cursor-pointer text-red-600 hover:text-red-700">
                    <LogOut className="w-4 h-4" />
                    <span className="font-medium">Log Out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto h-[calc(100vh-140px)]">
        {/* Conversations Sidebar */}
        <div className="w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200 flex flex-col">
          {/* Search Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Messages</h2>
              <Badge className="bg-teal-100 text-teal-800 px-2 py-1">
                {conversations.filter((c) => c.unread > 0).length} new
              </Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(index)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                  selectedConversation === index ? "bg-teal-50 border-l-4 border-l-teal-500" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {conversation.avatar}
                    </div>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-blue-600 mb-1">{conversation.school}</p>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge
                        className={`text-xs px-2 py-1 rounded-full ${
                          conversation.type === "coach"
                            ? "bg-green-100 text-green-700"
                            : conversation.type === "team"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {conversation.type === "coach" ? "Coach" : conversation.type === "team" ? "Team" : "Department"}
                      </Badge>
                      {conversation.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {conversations[selectedConversation]?.avatar}
                  </div>
                  {conversations[selectedConversation]?.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{conversations[selectedConversation]?.name}</h3>
                  <p className="text-sm text-blue-600">{conversations[selectedConversation]?.school}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Video className="w-4 h-4" />
                </Button>
                <Button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Info className="w-4 h-4" />
                </Button>
                <Button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.isOwn
                      ? "bg-gradient-to-r from-teal-500 to-red-500 text-white"
                      : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <div
                    className={`flex items-center justify-between mt-2 text-xs ${
                      message.isOwn ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    <span>{message.time}</span>
                    {message.isOwn && (
                      <div className="flex items-center gap-1">
                        {message.read ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                <Paperclip className="w-4 h-4" />
              </Button>
              <div className="flex-1 relative">
                <input
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full pr-12 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:border-teal-500 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && messageText.trim()) {
                      setMessageText("")
                    }
                  }}
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-teal-500 to-red-500 hover:from-teal-600 hover:to-red-600 text-white rounded-full w-8 h-8 p-0 disabled:opacity-50"
                  disabled={!messageText.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>Press Enter to send</span>
              <div className="flex items-center gap-4">
                <Button className="text-gray-500 hover:text-gray-700 text-xs px-2 py-1 hover:bg-gray-100 rounded">
                  <Star className="w-3 h-3 mr-1" />
                  Star
                </Button>
                <Button className="text-gray-500 hover:text-gray-700 text-xs px-2 py-1 hover:bg-gray-100 rounded">
                  <Archive className="w-3 h-3 mr-1" />
                  Archive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
