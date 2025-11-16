<?php

namespace App\Http\Controllers;

use App\Models\Preset;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PresetController extends Controller
{
    // Get all presets
    public function index()
    {
        $presets = Preset::all();

        return response()->json([
            'status' => 'success',
            'data' => $presets
        ]);
    }

    // Create a new preset
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'devices' => 'required|array'
        ]);

        $preset = Preset::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Preset created successfully',
            'data' => $preset
        ], 201);
    }

    // Get a single preset
    public function show($id)
    {
        $preset = Preset::find($id);

        if (!$preset) {
            return response()->json([
                'status' => 'error',
                'message' => 'Preset not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $preset
        ]);
    }
}
