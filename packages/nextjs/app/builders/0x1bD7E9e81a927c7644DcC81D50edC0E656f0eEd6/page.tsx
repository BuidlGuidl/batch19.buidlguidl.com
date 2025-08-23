"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Twitter } from "lucide-react";
import type { NextPage } from "next";

// Constants moved outside component for better performance
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 16;

const PIECES = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
};

const JennyTPage: NextPage = () => {
  const [board, setBoard] = useState(() =>
    Array(BOARD_HEIGHT)
      .fill(null)
      .map(() => Array(BOARD_WIDTH).fill(0)),
  );
  const [currentPiece, setCurrentPiece] = useState<number[][] | null>(null);
  const [piecePos, setPiecePos] = useState<{ x: number; y: number }>({ x: 4, y: 0 });
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Wrapped with useCallback as requested
  const getRandomPiece = useCallback((): number[][] => {
    const pieces = Object.keys(PIECES) as Array<keyof typeof PIECES>;
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    return PIECES[randomPiece];
  }, []);

  const canMovePiece = useCallback((piece: number[][], x: number, y: number): boolean => {
    for (let row = 0; row < piece.length; row++) {
      for (let col = 0; col < piece[row].length; col++) {
        if (piece[row][col]) {
          const newX = x + col;
          const newY = y + row;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) return false;
          if (newY >= 0 && board[newY][newX]) return false;
        }
      }
    }
    return true;
  }, [board]);

  const placePiece = useCallback(() => {
    if (!currentPiece) return;
    const newBoard = board.map(row => [...row]);

    if (currentPiece) {
      for (let row = 0; row < currentPiece.length; row++) {
        for (let col = 0; col < currentPiece[row].length; col++) {
          if (currentPiece[row][col]) {
            const y = piecePos.y + row;
            const x = piecePos.x + col;
            if (y >= 0) newBoard[y][x] = 1;
          }
        }
      }
    }

    // Clear lines
    const clearedBoard = newBoard.filter(row => !row.every(cell => cell === 1));
    const linesCleared = BOARD_HEIGHT - clearedBoard.length;

    while (clearedBoard.length < BOARD_HEIGHT) {
      clearedBoard.unshift(Array(BOARD_WIDTH).fill(0));
    }

    setBoard(clearedBoard);
    setScore(prev => prev + linesCleared * 10);

    // New piece
    const newPiece = getRandomPiece();
    if (canMovePiece(newPiece, 4, 0)) {
      setCurrentPiece(newPiece);
      setPiecePos({ x: 4, y: 0 });
    } else {
      setGameOver(true);
    }
  }, [board, currentPiece, piecePos, canMovePiece, getRandomPiece]);

  const movePiece = useCallback(
    (dx: number, dy: number) => {
      if (!currentPiece) return;

      const newX = piecePos.x + dx;
      const newY = piecePos.y + dy;

      if (canMovePiece(currentPiece, newX, newY)) {
        setPiecePos({ x: newX, y: newY });
      } else if (dy > 0) {
        placePiece();
      }
    },
    [currentPiece, piecePos, placePiece, canMovePiece],
  );

  const startGame = useCallback(() => {
    setBoard(
      Array(BOARD_HEIGHT)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(0)),
    );
    setCurrentPiece(getRandomPiece());
    setPiecePos({ x: 4, y: 0 });
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
  }, [getRandomPiece]);

  // Converted to useMemo as suggested, renamed from renderBoard
  const displayBoard = useMemo(() => {
    const boardCopy = board.map(row => [...row]);

    if (currentPiece) {
      for (let row = 0; row < currentPiece.length; row++) {
        for (let col = 0; col < currentPiece[row].length; col++) {
          if (currentPiece[row][col]) {
            const y = piecePos.y + row;
            const x = piecePos.x + col;
            if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
              boardCopy[y][x] = 2;
            }
          }
        }
      }
    }

    return boardCopy;
  }, [board, currentPiece, piecePos]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      movePiece(0, 1);
    }, 800);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, movePiece]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver || !gameStarted) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          movePiece(-1, 0);
          break;
        case "ArrowRight":
          e.preventDefault();
          movePiece(1, 0);
          break;
        case "ArrowDown":
          e.preventDefault();
          movePiece(0, 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted, gameOver, movePiece]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/avatar.png"
                alt="Jenny Avatar"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Jenny T.</h1>
          <p className="text-purple-600 font-medium mb-4">jennyt.eth</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">✨ Psychologist Tech</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">📈 Growth Marketing Digital</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">🌐 Web3 | Crypto | Blockchain</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Bio & Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Community builder and manager in the Web3 ecosystem with experience in marketing, content creation, and
                coordination of decentralized projects. I serve as an ambassador for Bitcoin Argentina, Conflux, and
                Stellar.
              </p>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-700 italic text-sm text-center">
                  &quot;Idea generator, making things happen&quot;
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Connect</h2>
              <div className="space-y-3">
                
                  href="https://twitter.com/jennyt_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Twitter</span>
                </a>
                
                  href="https://github.com/jennyt3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700 font-medium">GitHub</span>
                </a>
                
                  href="https://bento.me/jennyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 font-medium">Bento.me</span>
                </a>
                
                  href="https://app.ens.domains/jennyt.eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
                >
                  <span className="w-5 h-5 text-indigo-500 font-bold text-sm">ENS</span>
                  <span className="text-gray-700 font-medium">ENS Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Tetris Game */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">🎮 Tetris</h2>

            {/* Game Area */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                {displayBoard.map((row, y) => (
                  <div key={y} className="flex">
                    {row.map((cell, x) => (
                      <div
                        key={`${y}-${x}`}
                        className={`w-4 h-4 border border-gray-700 ${
                          cell === 1 ? "bg-purple-500" : cell === 2 ? "bg-yellow-400" : "bg-gray-800"
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Score */}
            <div className="text-center mb-4">
              <span className="text-lg font-bold text-gray-700">Score: {score}</span>
            </div>

            {/* Game Controls */}
            <div className="text-center">
              {!gameStarted || gameOver ? (
                <div>
                  {gameOver && <p className="text-red-600 mb-2">Game Over!</p>}
                  <button
                    onClick={startGame}
                    className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    {gameOver ? "Play Again" : "Start Game"}
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-600">Use arrow keys: ← → ↓</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JennyTPage;
