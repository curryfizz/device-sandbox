<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DeviceController extends Controller
{
    // Get all devices
    public function index()
    {
        $devices = Device::all();

        return response()->json([
            'status' => 'success',
            'data' => $devices
        ]);
    }

    // Create a new device
    public function store(Request $request)
    {
        // Validate request data
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'settings' => 'nullable|array' // JSON object
        ]);

        // Create device
        $device = Device::create([
            'type' => $validated['type'],
            'name' => $validated['name'],
            'settings' => $validated['settings'] ?? []
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Device created successfully',
            'data' => $device
        ], 201);
    }
}
