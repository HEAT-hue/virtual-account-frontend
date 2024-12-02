"use client"
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";

type MerchantOnboardFormProp = {
  serviceProviderId: string,
  serviceProviderName: string,
  settlementAccount: string,
  amountValidation: string,
  virtualAccountName: string,
  virtualAccountNumber: 
}

export function FormComponent() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectedFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (fileIndex: number) => {
    setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== fileIndex));
  };

  return (

    <div>
      <Header />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-8 px-9">
          <Card className="w-full max-w-[1000px]">

            <CardHeader>
              <CardTitle className="text-center text-3xl">Create Merchant</CardTitle>
            </CardHeader>

            <CardContent className="">
              <form className="space-y-6 overflow-scroll">
                <div className="p-3 gap-y-4 gap-x-4 grid grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="service-provider-id">Service Provider ID</Label>
                    <Input
                      id="service-provider-id"
                      name="service-provider-id"
                      placeholder="Enter service provider ID"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-provider-name">Service Provider Name</Label>
                    <Input
                      id="service-provider-name"
                      name="service-provider-name"
                      placeholder="Enter service provider name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="settlement-account">Settlement Account</Label>
                    <Input
                      id="settlement-account"
                      name="settlement-account"
                      placeholder="Enter settlement account"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount-validation">Amount Validation</Label>
                    <Select name="amount-validation">
                      <SelectTrigger>
                        <SelectValue placeholder="Select amount validation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="virtual-account-name">Virtual Account Name</Label>
                    <Input
                      id="virtual-account-name"
                      name="virtual-account-name"
                      placeholder="Enter virtual account name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="virtual-account-number">Virtual Account Number</Label>
                    <Input
                      name="virtual-account-number"
                      type="file"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notification-url">Notification URL</Label>
                    <Input
                      id="notification-url"
                      name="service-provider-notification-url"
                      placeholder="Enter notification URL"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload Documents</Label>
                  <div className="space-y-4">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 border-gray-300 dark:border-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          You can select multiple files
                        </p>
                      </div>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple
                      />
                    </label>

                    {selectedFiles.length > 0 && (
                      <div className="space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div
                            key={`${file.name}-${index}`}
                            className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-900"
                          >
                            <div className="flex items-center space-x-2">
                              <Upload className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                              <span className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[200px]">
                                {file.name}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFile(index)}
                              type="button"
                              className="hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Create Merchant
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}