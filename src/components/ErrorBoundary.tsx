"use client";

import { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">
              오류가 발생했습니다
            </h2>
          </div>

          <div className="mb-6 p-5 bg-red-50 border border-red-100 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-red-600">
                에러 메시지: {this.state.error?.message}
              </p>

              <button
                onClick={() => this.setState({ hasError: false })}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ml-4"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
