"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  User,
  MessageSquare,
  GraduationCap,
  Play,
  Grid3X3,
  Crown,
  Search,
  Heart,
  Send,
  ChevronDown,
  MapPin,
  Settings,
  Filter,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SquashLogo } from "@/components/squash-logo"

export default function SchoolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    location: "All Locations",
    academics: "All Academics",
    majors: "All Majors",
    athletics: "All Athletics",
  })

  const schools = [
    {
      id: 1,
      name: "Abilene Christian University",
      location: "Abilene, TX",
      division: "NCAA DI",
      logo: "ACU",
      color: "bg-purple-600",
      favorited: false,
    },
    {
      id: 2,
      name: "Adams State University",
      location: "Alamosa, CO",
      division: "NCAA DII",
      logo: "ASU",
      color: "bg-green-600",
      favorited: false,
    },
    {
      id: 3,
      name: "Adelphi University",
      location: "Garden City, NY",
      division: "NCAA DII",
      logo: "AU",
      color: "bg-blue-600",
      favorited: true,
    },
    {
      id: 4,
      name: "Adrian College",
      location: "Adrian, MI",
      division: "NCAA DIII",
      logo: "AC",
      color: "bg-orange-600",
      favorited: false,
    },
    {
      id: 5,
      name: "Alabama A&M University",
      location: "Normal, AL",
      division: "NCAA DI",
      logo: "AAMU",
      color: "bg-red-600",
      favorited: false,
    },
  ]

  const filterOptions = {
    location: ["All Locations", "Northeast", "Southeast", "Midwest", "Southwest", "West"],
    academics: ["All Academics", "High Academic", "Moderate Academic", "Less Competitive"],
    majors: ["All Majors", "Business", "Engineering", "Liberal Arts", "Sciences", "Education"],
    athletics: ["All Athletics", "NCAA DI", "NCAA DII", "NCAA DIII", "NAIA", "NJCAA"],
  }

  return (
    <div className="bg-gray-200">
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
              { icon: MessageSquare, label: "Messages", href: "/messages" },
              { icon: GraduationCap, label: "Schools", active: true, href: "/schools" },
              { icon: Play, label: "Video", href: "/video" },
            ].map(({ icon: Icon, label, active, href }) => (
              <Link key={label} href={href}>
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
              </Link>
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
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800/50 backdrop-blur-xl border-r border-white/10 min-h-screen">
          <div className="p-4">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              School Search
            </h2>
            <nav className="space-y-2">
              {[
                { icon: Heart, label: "Favorites" },
                { icon: Search, label: "Search", active: true },
                { icon: Settings, label: "Preferences" },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    active
                      ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white/95 backdrop-blur-xl flex flex-col">
          {/* Search and Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by school name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg">
                <Search className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key} className="relative">
                  <select
                    value={selectedFilters[key as keyof typeof selectedFilters]}
                    onChange={(e) => setSelectedFilters((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:border-blue-500 focus:outline-none cursor-pointer"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 flex">
            {/* Schools List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">1372 Schools</h3>
                  <Button className="text-gray-600 hover:text-gray-800 text-sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Sort by Relevance
                  </Button>
                </div>

                <div className="space-y-4">
                  {schools.map((school) => (
                    <Card
                      key={school.id}
                      className="hover:shadow-lg transition-all duration-300 border border-gray-200"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 ${school.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}
                            >
                              {school.logo}
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer text-lg">
                                {school.name}
                              </h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {school.location}
                                </span>
                                <Badge className="bg-gray-100 text-gray-700 text-xs">{school.division}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              className={`p-2 rounded-lg transition-all duration-300 ${
                                school.favorited
                                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${school.favorited ? "fill-current" : ""}`} />
                            </Button>
                            <Button className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg transition-all duration-300">
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Button className="w-full text-left text-gray-600 hover:text-gray-800 flex items-center justify-between">
                            <span className="text-sm font-medium">School Overview</span>
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-1/2 bg-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive School Map</h3>
                  <p className="text-gray-600 max-w-sm">
                    Explore schools across the United States. Click on markers to view school details and get
                    directions.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">NCAA DI</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">NCAA DII</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">NCAA DIII</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs text-gray-600">NAIA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50">
                  +
                </Button>
                <Button className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50">
                  −
                </Button>
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <p className="text-xs font-semibold text-gray-800 mb-2">School Locations</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Division I</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Division II</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Division III</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
