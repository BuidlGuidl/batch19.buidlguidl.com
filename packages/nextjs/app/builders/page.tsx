"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CodeBracketIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";

type Builder = {
  address: string;
  name: string;
  title: string;
  status: "checked-in" | "pending";
  ensName: string;
};

const BuildersPage = () => {
  // You can customize this list or fetch it from a contract
  const builders: Builder[] = [
    {
      address: "0x7E19070D16188F3c6243C6f405764C1d0727EDAE",
      name: "Fahmin",
      title: "Smart Contract Developer",
      status: "checked-in",
      ensName: "fahmin.eth",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="relative px-6 py-20">
          <div className="mx-auto max-w-6xl text-center px-6">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-primary/20 rounded-2xl">
                <UserGroupIcon className="h-16 w-16 text-primary" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-base-content mb-6">Batch 19 Builders</h1>

            <p className="text-xl text-base-content/70 mb-8 max-w-3xl mx-auto">
              Meet the amazing developers building the future of Web3. Each builder brings unique skills and
              perspectives to our community.
            </p>

            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-xl shadow-lg">
              <SparklesIcon className="h-6 w-6 mr-2" />
              {builders.length} Builders
            </div>
          </div>
        </div>
      </div>

      {/* Builders Grid */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {builders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {builders.map(builder => (
                <Link key={builder.address} href={`/builders/${builder.address}`} className="group">
                  <div className="bg-base-100 rounded-2xl p-6 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-primary/30 h-full">
                    {/* Avatar Section */}
                    <div className="text-center mb-4">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-1 shadow-lg mx-auto">
                          {builder.ensName ? (
                            <Image
                              src={`https://euc.li/${builder.ensName}`}
                              alt={`${builder.ensName} avatar`}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <div className="w-full h-full bg-base-100 rounded-full flex items-center justify-center">
                              <CodeBracketIcon className="h-10 w-10 text-primary" />
                            </div>
                          )}
                        </div>
                        {/* Status Indicator */}
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-base-100 ${
                            builder.status === "checked-in" ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Builder Info */}
                    <div className="text-center space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1">
                          {builder.name}
                        </h3>
                        <p className="text-sm text-base-content/70 line-clamp-2">{builder.title}</p>
                      </div>

                      {/* ENS and Address Info */}
                      {builder.ensName && (
                        <div className="flex items-center justify-center space-x-2 pt-2">
                          <div className="w-4 h-4 rounded-full overflow-hidden">
                            <Image
                              src={`https://euc.li/${builder.ensName}`}
                              alt={`${builder.ensName} small avatar`}
                              width={16}
                              height={16}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-primary font-medium truncate">{builder.ensName}</span>
                        </div>
                      )}

                      <p className="text-xs text-base-content/50 font-mono">
                        {builder.address.slice(0, 4)}...{builder.address.slice(-4)}
                      </p>

                      {/* Status Badge */}
                      <div className="pt-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            builder.status === "checked-in"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                          }`}
                        >
                          {builder.status === "checked-in" ? "✓ Checked In" : "⏳ Pending"}
                        </span>
                      </div>

                      {/* Arrow Indicator */}
                      <div className="pt-2">
                        <div className="inline-flex p-2 bg-base-200 rounded-full group-hover:bg-primary/20 transition-colors">
                          <ArrowRightIcon className="h-4 w-4 text-base-content/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto p-12 bg-base-100 rounded-3xl shadow-lg border border-base-300">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-base-content mb-4">No Builders Yet</h3>
                <p className="text-base-content/70 mb-8">
                  Be the first to check in and join Batch 19! Your profile will be featured here once you deploy and
                  check in.
                </p>
                <Link
                  href="/debug"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold hover:shadow-lg transition-all duration-200"
                >
                  <CodeBracketIcon className="h-5 w-5 mr-2" />
                  Deploy & Check In
                </Link>
              </div>
            </div>
          )}

          {/* Call to Action */}
          {builders.length > 0 && (
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
                <h3 className="text-3xl font-bold text-base-content mb-4">Ready to Join the Community?</h3>
                <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
                  Deploy your smart contract and check in to become part of Batch 19. Showcase your skills and connect
                  with fellow builders.
                </p>
                <Link
                  href="/debug"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <CodeBracketIcon className="h-6 w-6 mr-3" />
                  Deploy & Check In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildersPage;
