
import React, { useState, useEffect } from 'react';
import { BleClient, BleDevice, dataViewToText } from '@capacitor-community/bluetooth-le';
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CircleBolt, AlertCircle, CheckCircle2 } from "lucide-react";

const SERVICE_UUID = "0000FFE0-0000-1000-8000-00805F9B34FB"; // Common UUID for HC-05 modules
const CHARACTERISTIC_UUID = "0000FFE1-0000-1000-8000-00805F9B34FB";

const ArduinoController = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [device, setDevice] = useState<BleDevice | null>(null);
  const [led1On, setLed1On] = useState(false);
  const [led2On, setLed2On] = useState(false);
  const [led3On, setLed3On] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const initBluetooth = async () => {
      try {
        await BleClient.initialize();
        console.log('Bluetooth initialized');
      } catch (error) {
        console.error('Error initializing Bluetooth', error);
      }
    };

    initBluetooth();

    return () => {
      if (isConnected && device) {
        BleClient.disconnect(device.deviceId)
          .catch(error => console.error('Error disconnecting:', error));
      }
    };
  }, []);

  const connectToDevice = async () => {
    try {
      setConnecting(true);
      toast({
        title: "Scanning for devices...",
        description: "Please make sure your Arduino is powered on."
      });
      
      const device = await BleClient.requestDevice({
        services: [SERVICE_UUID],
      });
      
      toast({
        title: "Device found!",
        description: `Connecting to ${device.name || "Arduino device"}...`,
      });
      
      await BleClient.connect(device.deviceId);
      setDevice(device);
      setIsConnected(true);
      
      toast({
        title: "Connected!",
        description: "Successfully connected to Arduino",
        variant: "default",
      });
    } catch (error) {
      console.error('Connection error:', error);
      toast({
        title: "Connection failed",
        description: "Could not connect to Arduino device",
        variant: "destructive",
      });
    } finally {
      setConnecting(false);
    }
  };

  const disconnectFromDevice = async () => {
    if (device) {
      try {
        await BleClient.disconnect(device.deviceId);
        setIsConnected(false);
        setDevice(null);
        
        toast({
          title: "Disconnected",
          description: "Device has been disconnected",
        });
      } catch (error) {
        console.error('Disconnection error:', error);
      }
    }
  };

  const sendCommand = async (command: string) => {
    if (!isConnected || !device) {
      toast({
        title: "Not connected",
        description: "Connect to Arduino first",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(command);
      
      await BleClient.write(
        device.deviceId,
        SERVICE_UUID,
        CHARACTERISTIC_UUID,
        data.buffer
      );
      
      console.log(`Sent command: ${command}`);
    } catch (error) {
      console.error('Error sending command:', error);
      toast({
        title: "Command failed",
        description: "Failed to send command to Arduino",
        variant: "destructive",
      });
    }
  };

  const toggleLed = async (ledNumber: number, isOn: boolean) => {
    const commands = {
      1: { on: 'A', off: 'a' },
      2: { on: 'B', off: 'b' },
      3: { on: 'C', off: 'c' },
    };
    
    const ledState = isOn ? 'on' : 'off';
    const command = commands[ledNumber as keyof typeof commands][ledState];
    
    await sendCommand(command);
  };

  const handleLed1Toggle = () => {
    const newState = !led1On;
    setLed1On(newState);
    toggleLed(1, newState);
  };

  const handleLed2Toggle = () => {
    const newState = !led2On;
    setLed2On(newState);
    toggleLed(2, newState);
  };

  const handleLed3Toggle = () => {
    const newState = !led3On;
    setLed3On(newState);
    toggleLed(3, newState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Arduino LED Controller
        </h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
          {/* Connection Status */}
          <div className={`flex items-center justify-center mb-8 p-3 rounded-lg ${
            isConnected ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
          }`}>
            {isConnected ? (
              <CheckCircle2 className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <span className="font-medium">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          
          {/* Connection Button */}
          <div className="flex justify-center mb-10">
            <Button 
              onClick={isConnected ? disconnectFromDevice : connectToDevice}
              variant={isConnected ? "outline" : "default"}
              disabled={connecting}
              className={`w-full max-w-xs ${connecting ? 'opacity-70' : ''}`}
            >
              <CircleBolt className="mr-2 h-4 w-4" />
              {isConnected ? 'Disconnect' : (connecting ? 'Connecting...' : 'Connect to Arduino')}
            </Button>
          </div>

          {/* LED Controls */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-soft-blue rounded-lg animate-fade-in">
              <label htmlFor="led1" className="text-lg font-medium text-gray-700">LED 1</label>
              <Toggle 
                id="led1" 
                pressed={led1On} 
                onPressedChange={handleLed1Toggle}
                disabled={!isConnected}
                className={`data-[state=on]:bg-green-500 data-[state=on]:text-white transition-all duration-300 ${
                  led1On ? 'shadow-lg shadow-green-200' : ''
                }`}
                aria-label="Toggle LED 1"
              >
                {led1On ? 'ON' : 'OFF'}
              </Toggle>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-soft-purple rounded-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <label htmlFor="led2" className="text-lg font-medium text-gray-700">LED 2</label>
              <Toggle 
                id="led2" 
                pressed={led2On}
                onPressedChange={handleLed2Toggle}
                disabled={!isConnected}
                className={`data-[state=on]:bg-green-500 data-[state=on]:text-white transition-all duration-300 ${
                  led2On ? 'shadow-lg shadow-green-200' : ''
                }`}
                aria-label="Toggle LED 2"
              >
                {led2On ? 'ON' : 'OFF'}
              </Toggle>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-soft-peach rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <label htmlFor="led3" className="text-lg font-medium text-gray-700">LED 3</label>
              <Toggle 
                id="led3" 
                pressed={led3On}
                onPressedChange={handleLed3Toggle}
                disabled={!isConnected}
                className={`data-[state=on]:bg-green-500 data-[state=on]:text-white transition-all duration-300 ${
                  led3On ? 'shadow-lg shadow-green-200' : ''
                }`}
                aria-label="Toggle LED 3"
              >
                {led3On ? 'ON' : 'OFF'}
              </Toggle>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="mt-8 text-sm text-gray-600 rounded-lg bg-gray-50 p-4">
            <p className="mb-2"><strong>Instructions:</strong></p>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Connect HC-05 module to your Arduino</li>
              <li>Click "Connect" to pair with Arduino</li>
              <li>Toggle switches to control LEDs</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArduinoController;
